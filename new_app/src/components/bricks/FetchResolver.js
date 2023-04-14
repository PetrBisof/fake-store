import InfoTextIcon from "./InfoTextIcon";
import { mdiAlertCircleOutline, mdiLoading } from "@mdi/js";
import PropTypes from "prop-types";

//Component serves to deal with fetch possible states - error and isLoading
function FetchResolver(props) {
  let contentToRender;
  if (props.isLoading) {
    contentToRender = (
      <InfoTextIcon text="Content is loading" icon={mdiLoading} rotate />
    );
  } else if (props.error) {
    contentToRender = (
      <InfoTextIcon text="An error occured" icon={mdiAlertCircleOutline} />
    );
  } else {
    contentToRender = props.children;
  }

  return contentToRender;
}

FetchResolver.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default FetchResolver;
