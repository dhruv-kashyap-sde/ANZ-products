import { useContext, useEffect, useState } from "react";
import "./Inquiry.css";
import DetailedPopup from "../../utils/Popups/DetailedPopup";
import axios from "axios";
import { ProductContext } from "../../context/ProductContext";

const Mails = () => {
  const URL = import.meta.env.VITE_API_URL;
  // const {
  //   inquiries,
  //   setInquiries
  // } = useContext(ProductContext);
  const [inquiries, setInquiries] = useState([]);
  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(`${URL}/inquiries`);
        setInquiries(response.data);
      } catch (error) {
        console.error("Error fetching inquiries", error);
      }
    };
    fetchInquiries();
  }, []);

  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <>
      <div className="mail-header">
        <h1>Inquiries</h1>
        <hr />
        <div className="table-container">
          <table className="responsive-table ">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length !== 0 
                && inquiries.map((item) => (
                <tr onClick={open} key={item._id}>
                  <td className="italic-text">{item.date}</td>
                  <td className="italic-text">{item.name}</td>
                  <td className="italic-text">{item.email}</td>
                  <td className="italic-text">{item.phone}</td>
                  <td className="italic-text">{item.message}</td>
                  <td className="italic-text">{item.product.name}</td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {inquiries.length === 0 && <div className="no-response-text secondary-text">No Inquiries yet</div>}
      {visible && <DetailedPopup />}
    </>
  );
};

export default Mails;
