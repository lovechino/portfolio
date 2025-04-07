import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/authSlice";
import AdSenseAd from "../Components/Ads";

const FormBuid = () => {
  const [name, setName] = useState("");
  const [introduction, setIntro] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const availableSkills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Python",
    "SQL",
  ];
  const dispatch = useDispatch();
  const handleSkillChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedSkills(selectedOptions);
  };

  const [numExperiences, setNumExperiences] = useState(0);
  const [experiences, setExperiences] = useState([]);
  const handleNumExperiencesChange = (event) => {
    const count = parseInt(event.target.value, 10) || 0;
    setNumExperiences(count);
    setExperiences(Array(count).fill({ description: "", time: "" })); // Thêm trường 'time'
  };
  const handleExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], [name]: value };
    setExperiences(newExperiences);
  };

  const [numProjects, setNumProjects] = useState(0);
  const [projects, setProjects] = useState([]);
  const handleNumProjectsChange = (event) => {
    const count = parseInt(event.target.value, 10) || 0;
    setNumProjects(count);
    setProjects(
      Array(count).fill({ name: "", description: "", link: "", time: "" })
    ); // Thêm trường 'time'
  };

  const handleProjectChange = (index, event) => {
    const { name, value } = event.target;
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setProjects(newProjects);
  };
  const handleSubmit = () => {
    // const formData = new FormData()
    // formData.append("name",name)
    // formData.append("introduction",introduction)
    // formData.append("skill",selectedSkills)
    // formData.append("experiences",experiences)
    // formData.append("projects",projects)
    // console.log(formData)
    dispatch(
      setUser({
        name: name,
        introduction: introduction,
        skill: selectedSkills,
        experiences: experiences,
        projects: projects,
      })
    );
  };

  return (
    <div class="bg-gray-100 p-8 rounded-md shadow-md max-w-lg mx-auto mt-10">
      <h1 class="text-2xl font-bold mb-4">Form</h1>
      <div>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
            Họ và Tên
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label
            for="introduction"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Giới thiệu bản thân
          </label>
          <textarea
            id="introduction"
            rows={4}
            placeholder="Giới thiệu bản thân"
            value={introduction}
            onChange={(e) => setIntro(e.target.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label
            for="skills"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Kỹ năng cá nhân :
          </label>
          <select
            id="skills"
            multiple
            value={selectedSkills}
            onChange={handleSkillChange}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {availableSkills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
          <p class="text-gray-600 text-sm mt-1">
            Đã chọn: {selectedSkills.join(", ")}
          </p>
        </div>

        <div>
          <div class="mb-4">
            <label
              htmlFor="numExperiences"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Số lượng kinh nghiệm:
            </label>
            <input
              type="number"
              id="numExperiences"
              value={numExperiences}
              onChange={handleNumExperiencesChange}
              min="0"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {Array.from({ length: numExperiences }).map((_, index) => (
            <div key={index} class="mb-6 border-b pb-4">
              <h3 class="text-lg font-semibold mb-2">
                Kinh nghiệm {index + 1}
              </h3>
              <div class="mb-2">
                <label
                  htmlFor={`experience-time-${index}`}
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  Thời gian:
                </label>
                <input
                  type="text"
                  id={`experience-time-${index}`}
                  name="time"
                  value={experiences[index].time}
                  onChange={(event) => handleExperienceChange(index, event)}
                  placeholder="Ví dụ: 01/2023 - 12/2023 hoặc Hiện tại"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor={`experience-description-${index}`}
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  Mô tả:
                </label>
                <textarea
                  id={`experience-description-${index}`}
                  name="description"
                  rows="3"
                  value={experiences[index].description}
                  onChange={(event) => handleExperienceChange(index, event)}
                  placeholder="Mô tả ngắn gọn về kinh nghiệm này."
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          ))}
          <div class="mb-4 mt-6">
            <label
              htmlFor="numProjects"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Dự án cá nhân:
            </label>
            <input
              type="number"
              id="numProjects"
              value={numProjects}
              onChange={handleNumProjectsChange}
              min="0"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {Array.from({ length: numProjects }).map((_, index) => (
            <div key={index} class="mb-6 border-b pb-4">
              <h3 class="text-lg font-semibold mb-2">Dự án {index + 1}</h3>
              <div class="mb-2">
                <label
                  htmlFor={`project-name-${index}`}
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  Tên dự án:
                </label>
                <input
                  type="text"
                  id={`project-name-${index}`}
                  name="name"
                  value={projects[index].name}
                  onChange={(event) => handleProjectChange(index, event)}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="mb-2">
                <label
                  htmlFor={`project-time-${index}`}
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  Thời gian:
                </label>
                <input
                  type="text"
                  id={`project-time-${index}`}
                  name="time"
                  value={projects[index].time}
                  onChange={(event) => handleProjectChange(index, event)}
                  placeholder="Ví dụ: 05/2023 - 08/2023"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div class="mb-2">
                <label
                  htmlFor={`project-description-${index}`}
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  Mô tả:
                </label>
                <textarea
                  id={`project-description-${index}`}
                  name="description"
                  rows="3"
                  value={projects[index].description}
                  onChange={(event) => handleProjectChange(index, event)}
                  placeholder="Mô tả ngắn gọn về dự án."
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor={`project-link-${index}`}
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  Link (nếu có):
                </label>
                <input
                  type="text"
                  id={`project-link-${index}`}
                  name="link"
                  value={projects[index].link}
                  onChange={(event) => handleProjectChange(index, event)}
                  placeholder="Link đến dự án (GitHub, live demo, ...)"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmit}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
      <div className="mt-8">
        <AdSenseAd />
      </div>
    </div>
  );
};

export default FormBuid;
