import React from "react";

const RecentlyViewed = () => {
  return (
    <div className="interviewTable">
      <div className="container" style={{ margin: "30px 0" }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow">
              <div className="card-header p-3">
                <h5 className="mb-0 d-flex">
                  <i
                    style={{ paddingRight: "5px" }}
                    className="fa-solid fa-tower-broadcast"
                  ></i>
                  Recently Viewd
                </h5>
              </div>
              <div
                className="card-body"
                style={{
                  position: "relative",
                  height: "200px",
                  overflowY: "scroll",
                }}
              >
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th
                        style={{ top: "0", zIndex: "2", position: "stickly" }}
                        scope="col"
                      >
                        Company
                      </th>
                      <th
                        style={{ top: "0", zIndex: "2", position: "stickly" }}
                        scope="col"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                          className="shadow-1-strong rounded-circle"
                          alt="avatar 1"
                          style={{ width: "55px", height: "auto" }}
                        />
                        <span className="ms-2">Amazon</span>
                      </th>
                      <td className="align-middle">
                        <i className="fa-solid fa-eye"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                          className="shadow-1-strong rounded-circle"
                          alt="avatar 1"
                          style={{ width: "55px", height: "auto" }}
                        />
                        <span className="ms-2">Amazon</span>
                      </th>
                      <td className="align-middle">
                        <i className="fa-solid fa-eye"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                          className="shadow-1-strong rounded-circle"
                          alt="avatar 1"
                          style={{ width: "55px", height: "auto" }}
                        />
                        <span className="ms-2">Amazon</span>
                      </th>
                      <td className="align-middle">
                        <i className="fa-solid fa-eye"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
