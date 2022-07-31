import { NextPage, NextPageContext } from "next";
import { useEffect } from "react";
import resumeJson from "./../data/resume.json";

interface Props {
  data: any;
}

const Page: NextPage<Props> = (props) => {
  useEffect(() => {
    console.log("{Page} props :", props.data);
  }, []);

  return (
    <>
      <h1 className="text-red-500">Your user agent</h1>
      <p>{JSON.stringify(props.data)}</p>
    </>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const data = JSON.parse(JSON.stringify(resumeJson));

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Page;
