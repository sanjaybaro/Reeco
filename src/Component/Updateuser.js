import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const Updateuser = () => {
  const [id, idchange] = useState(0);
  const [name, namechange] = useState("");
  const [brand, brandchange] = useState("");
  const [price, pricechange] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const userobj = useSelector((state) => state.user.userobj);

  const handlesubmit = (e) => {
    e.preventDefault();
    const userobj = { id, name, brand, price };
    dispatch(FunctionUpdateUser(userobj, id));
    navigate("/user");
  };

  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, []);

  useEffect(() => {
    if (userobj) {
      idchange(userobj.id);
      namechange(userobj.name);
      brandchange(userobj.brand);
      pricechange(userobj.price);
    }
  }, [userobj]);

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add Product</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Id</label>
                  <input
                    value={id || ""}
                    disabled="disabled"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name || ""}
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Brand</label>
                  <input
                    value={brand || ""}
                    onChange={(e) => brandchange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Price</label>
                  <input
                    value={price || ""}
                    onChange={(e) => pricechange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            |
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Updateuser;
