import React from 'react';
import ReactModal from 'react-modal';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const VideoModal = ({ isPlaying, handleCloseModal, videoUrl }) => {
  return (
    <ReactModal
      isOpen={isPlaying}
      onRequestClose={handleCloseModal}
      className='video-modal'
    >
      <button
        onClick={handleCloseModal}
        className='mt-4 rounded-full border bg-[#1e293b] px-4 py-2 text-[#b5cdf5] hover:bg-[#303e54]'
      >
        X
      </button>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        playing={true}
        width='65%'
        height='80%'
      />
    </ReactModal>
  );
};

VideoModal.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

export default VideoModal;
