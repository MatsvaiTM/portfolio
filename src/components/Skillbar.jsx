export default function SkillBar({ name, level }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="bg-slate-700 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}