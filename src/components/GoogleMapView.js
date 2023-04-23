import React from "react";

const GoogleMapView = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7266996122967!2d72.54439531495723!3d23.03380492168827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84eaf57ac615%3A0x5c7498bb96b34c97!2sLalbhai%20Dalpatbhai%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1650181216640!5m2!1sen!2sin"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      frameborder="0"
      className="google-map-container"
      allowfullscreen
    ></iframe>
  );
};

export default GoogleMapView;
