'use client';
import { useState } from 'react';

function PersonalSkillsAndTrainingForm() {
  const [personalSkillsData, setPersonalSkillsData] = useState({
    skillName: '',
    skillLevel: '',
    
  });

  const [personalTrainingData, setPersonalTrainingData] = useState({
    trainingName: '',
    startDate: '',
    endDate: '',
    
  });

  const [errors, setErrors] = useState({
    personalSkills: {},
    personalTraining: {},
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const validationErrors = {
      personalSkills: validatePersonalSkills(personalSkillsData),
      personalTraining: validatePersonalTraining(personalTrainingData),
    };

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors.personalSkills).length === 0 &&
      Object.keys(validationErrors.personalTraining).length === 0
    ) {
      
      console.log('Form submitted successfully');
      setIsSubmitted(true); 
      
    } else {
      setIsSubmitted(false); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');

    if (section === 'personalSkills') {
      setPersonalSkillsData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    } else if (section === 'personalTraining') {
      setPersonalTrainingData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    }
  };

  const validatePersonalSkills = (data) => {
    const errors = {};
    if (!data.skillName.trim()) {
      errors.skillName = 'Skill name is required and cannot be empty or spaces only';
    }
    if (!data.skillLevel.trim()) {
      errors.skillLevel = 'Skill level is required and cannot be empty or spaces only';
    }
    return errors;
  };

  const validatePersonalTraining = (data) => {
    const errors = {};
    if (!data.trainingName.trim()) {
      errors.trainingName = 'Training name is required and cannot be empty or spaces only';
    }
    if (!data.startDate) {
      errors.startDate = 'Start date is required';
    }
    if (!data.endDate) {
      errors.endDate = 'End date is required';
    }
    return errors;
  };

  const skillsOptions = [
    { id: 1, name: 'Project management' },
    { id: 2, name: 'Data analysis' },
    { id: 3, name: 'Computer literacy' },
    { id: 4, name: 'Organizational Skills' },
    { id: 5, name: 'Technical Aptitude' },
    { id: 6, name: 'Machine Learning' },
    { id: 7, name: 'Leadership' },
    { id: 8, name: 'Data visualization' },
    { id: 9, name: 'Presentation competency' },
    { id: 10, name: 'Research expertise' },
  ];

  const trainingOptions = [
    { id: 1, name: 'Human Resources Manager' },
    { id: 2, name: 'Event Coordinator' },
    { id: 3, name: 'Project Manager (Web Development)' },
    { id: 4, name: 'Sales Trainer' },
    { id: 5, name: 'Customer Support Trainer' },
    { id: 6, name: 'Technical Trainer (Software Development)' },
    { id: 7, name: 'Operations Trainer' },
    { id: 8, name: 'Sales and Marketing Trainer' },
    { id: 9, name: 'Retail Training Manager' },
    { id: 10, name: 'IT Trainer' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-900">
      <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-green-700 rounded-lg shadow-md max-w-lg w-full">
        <div className="form-group">
          <h3 className="text-xl font-semibold mb-4 text-white">Personal Skills</h3>
          <label className="block mb-2">
            <span className="text-white">Skill Name:</span>
            <select
              name="personalSkills.skillName"
              value={personalSkillsData.skillName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-green-600 border border-gray-400 rounded-md text-white"
            >
              <option value="">Select a skill</option>
              {skillsOptions.map((skill) => (
                <option key={skill.id} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
            {errors.personalSkills.skillName && <p className="text-red-300 text-sm">{errors.personalSkills.skillName}</p>}
          </label>
        </div>

        <div className="form-group">
          <h3 className="text-xl font-semibold mb-4 text-white">Personal Training</h3>
          <label className="block mb-2">
            <span className="text-white">Training Name:</span>
            <select
              name="personalTraining.trainingName"
              value={personalTrainingData.trainingName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-green-600 border border-gray-400 rounded-md text-white"
            >
              <option value="">Select a training</option>
              {trainingOptions.map((training) => (
                <option key={training.id} value={training.name}>
                  {training.name}
                </option>
              ))}
            </select>
            {errors.personalTraining.trainingName && <p className="text-red-300 text-sm">{errors.personalTraining.trainingName}</p>}
          </label>
          <label className="block mb-2">
            <span className="text-white">Start Date:</span>
            <input
              type="date"
              name="personalTraining.startDate"
              value={personalTrainingData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-green-600 border border-gray-400 rounded-md text-white"
            />
            {errors.personalTraining.startDate && <p className="text-red-300 text-sm">{errors.personalTraining.startDate}</p>}
          </label>
          <label className="block mb-2">
            <span className="text-white">End Date:</span>
            <input
              type="date"
              name="personalTraining.endDate"
              value={personalTrainingData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 bg-green-600 border border-gray-400 rounded-md text-white"
            />
            {errors.personalTraining.endDate && <p className="text-red-300 text-sm">{errors.personalTraining.endDate}</p>}
          </label>
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Submit
        </button>

        {isSubmitted && (
          <p className="text-white text-sm mt-4">
            Form submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default PersonalSkillsAndTrainingForm;