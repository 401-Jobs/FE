import React from "react";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const RecentlyViewed = () => {
  const [allViews, setAllViews] = useState([]);
  const { token } = useContext(AuthContext);
  // console.log(token)
  const jobseekerViews = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    let res = await axios.get("https://reqiq.herokuapp.com/jobseeker-views/", {
      headers: headers,
    });
    // console.log(res.data);
    setAllViews(res.data["View"]);
    console.log(res.data);
  };

  useEffect(() => {
    jobseekerViews();
  }, []);

  return (
    <div className="interviewTable">
      <div class="container" style={{ margin: "30px 0" }}>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow">
              <div class="card-header p-3">
                <h5 class="mb-0 d-flex">
                  <i
                    style={{ paddingRight: "5px" }}
                    class="fa-solid fa-tower-broadcast"
                  ></i>
                  Recently Viewd
                </h5>
              </div>
              <div
                class="card-body"
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
                    {allViews.length > 0 &&
                      allViews.map((item) => {
                        return (
                          <tr class="fw-normal">
                            <th>
                              <img
                                src={`${process.env.REACT_APP_BACKEND_URL}${item["logo"]}`}
                                class="shadow-1-strong"
                                alt="avatar 1"
                                width={"50px"}
                                height={"50px"}
                                style={{ borderRadius: "50%" }}
                              />
                              <span class="ms-2">{item["company_name"]}</span>
                            </th>
                            <td class="align-middle">
                              <i class="fa-solid fa-eye"></i>
                            </td>
                          </tr>
                        );
                      })}
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
