import React from "react";
import profilepicture from "../assets/profilePic.jpg";
import Timeline from "../components/Timeline";

export default function Aboutme() {
  return (
    <>
      {" "}
      <div className="text-center flex flex-col items-center h-80 justify-center ">
        <img
          className="rounded-full w-80 h-80 object-cover overflow-hidden "
          src={profilepicture}
          // width={200}
          // height={200}
          alt="profile picture of me in flagstaff"
        />
      </div>
      <Timeline />
    </>
  );
}
