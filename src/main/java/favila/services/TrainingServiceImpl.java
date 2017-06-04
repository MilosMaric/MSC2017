package favila.services;

import java.util.ArrayList;
import java.util.Date;

import favila.dtos.DailyScheduleDTO;
import favila.model.Training;
import favila.repos.ITrainingRepository;
import favila.utils.CheckHelper;

public class TrainingServiceImpl implements ITrainingService{
	
	public static final String periodicTraining = "periodic";
	public static final String individualTraining = "individual";
	
	private ITrainingRepository repo;
	
	@Override
	public Training getById(int id) {
		if(CheckHelper.isIdValid(id)) {
			Training training = repo.findOne(id);
			if(CheckHelper.isFilled(training)) {
				return training;
			}
		}
		
		return null;
	}
	@Override
	public ArrayList<Training> getAll() {
		ArrayList<Training> trainings = (ArrayList<Training>) repo.findAll();
		if(CheckHelper.isFilled(trainings)) {
			return trainings;
		}
		
		return null;
	}
	@Override
	public Training add(Training entity) {
		if(isValid(entity) && !CheckHelper.isIdValid(entity.getId())) {
			Training addedTraining = repo.save(entity);
			if(CheckHelper.isFilled(addedTraining)) {
				return addedTraining;
			}
		}
		
		return null;
	}
	@Override
	public Training update(Training entity) {
		if(isValid(entity)) {
			Training updatedTraining = repo.save(entity);
			if(CheckHelper.isFilled(updatedTraining)) {
				return updatedTraining;
			}
		}
		
		return null;
	}
	@Override
	public boolean delete(Training entity) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean isValid(Training entity) {
		return CheckHelper.isFilled(entity) &&
				CheckHelper.isFilled(entity.getTime()) &&
				CheckHelper.isFilled(entity.getGroup()) &&
				CheckHelper.isFilled(entity.getType()) &&
				(entity.getType().equals(individualTraining) || entity.getType().equals(periodicTraining));
	}
	@Override
	public ArrayList<Training> getTrainingsForGroup(int grpId) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public ArrayList<DailyScheduleDTO> getSchedule() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public ArrayList<Training> getTrainingsForPeriod(Date to) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public ArrayList<Training> getTrainingsForPeriod(Date from, Date to) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public ArrayList<Training> getTrainingsForPeriodAndGroup(Date to, int grpId) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public ArrayList<Training> getTrainingsForPeriodAndGroup(Date from, Date to, int grpId) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean addNote(int trainingId, String note) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean cancelTraining(int trainingId) {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean setSchedule(ArrayList<DailyScheduleDTO> schedule) {
		// TODO Auto-generated method stub
		return false;
	}
}
