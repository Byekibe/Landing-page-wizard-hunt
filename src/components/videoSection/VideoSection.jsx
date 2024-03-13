import video from "../../assets/video.png";

export default function VideoSection() {
  return (
    <section className="mt-4 flex items-center">
      <div className="video-container mx-auto p-2">
        <img className="" src={video} alt="image of video" />
      </div>
    </section>
  );
}
