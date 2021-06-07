import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <metadata
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail {...props.meetupData} />
    </>
  );
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://ros:ros123ros@cluster0.ot9mg.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        id: selectedMeetup._id.toString(),
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://ros:ros123ros@cluster0.ot9mg.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
    fallback: 'blocking',
  };
}

export default MeetupDetails;
