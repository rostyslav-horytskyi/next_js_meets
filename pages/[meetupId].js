import { DUMMY_MEETUPS } from ".";
import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail {...DUMMY_MEETUPS[0]} />
  );
};

export default MeetupDetails;
