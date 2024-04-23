import { PacmanLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Loader = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <PacmanLoader
        color={"rgba(166, 53, 214, 0.7)"}
        css={override}
        size={50}
      />
    </div>
  );
};
