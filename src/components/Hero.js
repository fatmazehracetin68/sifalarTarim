const Hero = () => {
  return (
    <section
      className="h-[500px] bg-cover bg-center bg-gray-200 flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="text-center p-5 bg-red-500 rounded-xl">
        <h1>NE yazmalı?</h1>
      </div>
    </section>
  );
};

export default Hero;
