import { Helmet } from "react-helmet-async";

export const Title = ({ titleName }) => {
  return (
    <Helmet>
      <title>YEAHFLIX | {titleName}</title>
    </Helmet>
  );
};
