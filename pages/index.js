import MeetupList from '../components/meetups/MeetupList';

export const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/1024px-KeizersgrachtReguliersgrachtAmsterdam.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://cms.finnair.com/resource/blob/691614/4b2f25f2f1d9572a1bf5445d84ff4e92/amsterdam-main-data.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup',
  },
];

const HomePage = () => {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  );
};

export default HomePage;
