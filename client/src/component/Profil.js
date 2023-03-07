import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import { deletecommande } from './JS/commandeSlice';
import Edituser from './Edituser';

function Profil({ping,setping}) {
    const user= useSelector((state)=> state.user?.user);
    const commande= useSelector((state)=> state.commande.commandeList);
    console.log(commande)
    const navigate=useNavigate();
    const dispatch=useDispatch();
  return (
    <div>
      <div style={{ position: "absolute", marginTop: "150px" }}>
        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <div className="profile-nav col-md-3">
              <div className="panel">
                <div className="user-heading round">
                  <a href="#">
                    <img src={user ? user.img : <h1>...Loading</h1>} alt="" />
                  </a>
                  <h1>{user ? user.name : <h1>...Loading</h1>}</h1>

                  <p>{user ? user.email : <h1>...Loading</h1>}</p>
                </div>
                <ul className="nav nav-pills nav-stacked">
                  <li className="active">
                    <a href="#">
                      {" "}
                      <i className="fa fa-user" /> Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-calendar" /> Recent Activity{" "}
                      <span className="label label-warning pull-right r-activity">
                        9
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-edit" />
                      <Edituser ping={ping} setping={setping} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="pane" className="panel">
              <div className="bio-graph-heading">
                <Table
                  striped
                  bordered
                  hover
                  style={{ backgroundColor: " #ea9917" }}
                >
                  <thead>
                    <tr>
                      <th>img</th>
                      <th>nameproduct</th>
                      <th>price</th>
                      <th>date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {commande
                      ?.filter((el) => el.nameclient == user?.name)
                      .map((el) => (
                        <tr>
                          <td>
                            <img
                              src={el?.img}
                              style={{ width: "25px", height: "25px" }}
                            />
                          </td>
                          <td>{el?.nameproduct}</td>
                          <td>{el?.price}</td>
                          <td>{el?.date}</td>
                          <td>
                            {" "}
                            <button
                              onClick={() => {
                                dispatch(deletecommande(el._id));
                                setping(!ping);
                              }}
                            >
                              x
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
              <div className="panel-body bio-graph-info " id="beu">
                <div className="row">
                  <div className="bio-row">
                    <p>
                      <span>First Name </span>
                      {user ? user.name : <h1>...Loading</h1>}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Last Name </span>
                      {user ? user.lastName : <h1>...Loading</h1>}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>email</span>
                      {user ? user.email : <h1>...Loading</h1>}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Profil