import React from "react";
import PageAddListing1 from "./PageAddListing1";
import PageAddListing10 from "./PageAddListing10";
import PageAddListing2 from "./PageAddListing2";
import PageAddListing3 from "./PageAddListing3";
import PageAddListing4 from "./PageAddListing4";
import PageAddListing5 from "./PageAddListing5";
import PageAddListing6 from "./PageAddListing6";
import PageAddListing7 from "./PageAddListing7";
import PageAddListing8 from "./PageAddListing8";
import PageAddListing9 from "./PageAddListing9";

const Page = ({
  params,
  searchParams,
}: {
  params: { stepIndex: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let ContentComponent = PageAddListing1;
  switch (Number(params.stepIndex)) {
    case 1:
      ContentComponent = PageAddListing1;
      break;
    case 2:
      ContentComponent = PageAddListing2;
      break;
    case 3:
      ContentComponent = PageAddListing3;
      break;
    case 4:
      ContentComponent = PageAddListing4;
      break;
    case 5:
      ContentComponent = PageAddListing5;
      break;
    case 6:
      ContentComponent = PageAddListing6;
      break;
    case 7:
      ContentComponent = PageAddListing7;
      break;
    case 8:
      ContentComponent = PageAddListing8;
      break;
    case 9:
      ContentComponent = PageAddListing9;
      break;
    case 10:
      ContentComponent = PageAddListing10;
      break;

    default:
      ContentComponent = PageAddListing1;
      break;
  }

  return <ContentComponent />;
};

export default Page;
