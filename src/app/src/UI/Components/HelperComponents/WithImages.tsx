import * as React from "react";

// Hooks
import { LoadImages } from "../../../Hooks";

//subComponents
import Loading from "../Loading";

export interface WithImagesProps {
  images: string[];
}

const WithImages: React.SFC<WithImagesProps> = props => {
  const loaded = LoadImages(props.images);
  return loaded ? (
    <React.Fragment>{props.children}</React.Fragment>
  ) : (
    <Loading />
  );
};

export default WithImages;
