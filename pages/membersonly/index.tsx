import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const index = () => {
	return <h1>This page is for members only</h1>;
};

export default index;
export const getServerSideProps = withPageAuthRequired();
