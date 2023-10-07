import React from "react";
import MemberCard from "../components/memberCard/MemberCard"

export default {
    title: "Home Page/MemberCard",
    component: MemberCard,
    decorators: [
    ],
  };

  export const Basic = () => {
    return (
      <MemberCard />
    );
  };
  Basic.storyName = "Default";