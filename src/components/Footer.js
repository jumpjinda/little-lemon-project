import React from 'react';
import chef from '../images/restaurant chef B.jpg';

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "200px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        paddingRight: "10px"
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <img
          style={{
            height: "120px",
            objectFit: "cover",
          }}
          src={chef} />
      </div>
      <div
        style={{
          marginTop: "40px"
        }}>
        <div
          style={{
            fontWeight: "bold"
          }}>
          Contact</div>
        <div>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              marginTop: "10px",
              fontSize: "0.8rem",
              lineHeight: "1.5"
            }}>
            <li>Email</li>
            <li>Phone</li>
            <li>Address</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          marginTop: "40px"
        }}>
        <div
          style={{
            fontWeight: "bold"
          }}>Social Media</div>
        <div>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              marginTop: "10px",
              fontSize: "0.8rem",
              lineHeight: "1.5"
            }}>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;