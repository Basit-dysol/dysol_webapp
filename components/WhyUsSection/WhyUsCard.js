export default function WhyUsCard({ icon, title, description }) {
  return (
    <div className="border-2 border-dashed border-gray-500 p-6 rounded-lg text-center transition transform hover:scale-105 hover:shadow-lg">
      <div className="text-3xl text-pink-500 mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}
