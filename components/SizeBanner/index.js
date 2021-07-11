import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 14px;
  background: rgb(118, 189, 77);
  background: linear-gradient(
    90deg,
    rgba(118, 189, 77, 1) 0%,
    rgba(51, 103, 51, 1) 100%
  );
  padding: 0px 40px;
  border-radius: 0 4px 4px 0;
  position: absolute;
  left: 0;
  top: 5%;
  color: white;
  font-weight: 500;
`;

const SizeBanner = (props) => {
  const { size } = props;
  return (
    <Container>
      <p>{size} KB</p>
    </Container>
  );
};

SizeBanner.defaultProps = {
  size: 100,
};

SizeBanner.propTypes = {
  size: PropTypes.number,
};

export default SizeBanner;
