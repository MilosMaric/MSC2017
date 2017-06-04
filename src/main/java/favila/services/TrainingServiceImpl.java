package favila.services;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import org.joda.time.DateTime;
import org.joda.time.DateTimeConstants;

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
		if(CheckHelper.isIdValid(grpId)) {
			ArrayList<Training> trainings = repo.getTrainingsForGroup(grpId);
			if(CheckHelper.isFilled(trainings)) {
				return trainings;
			}
		}
		
		return null;
	}
	
	@Override
	public ArrayList<DailyScheduleDTO> getSchedule() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public ArrayList<Training> getTrainingsForPeriod(Date from, Date to) {
		if(CheckHelper.isValidInterval(from, to)) {
			ArrayList<Training> trainings = repo.getTrainingsForPeriod(from, to);
			if(CheckHelper.isFilled(trainings)) {
				return trainings;
			}
		}
		
		return null;
	}
	
	@Override
	public ArrayList<Training> getTrainingsForPeriodAndGroup(Date from, Date to, int grpId) {
		if(CheckHelper.isValidInterval(from, to) && CheckHelper.isIdValid(grpId)) {
			ArrayList<Training> trainings = repo.getGroupTrainingsForPeriod(grpId, from, to);
			if(CheckHelper.isFilled(trainings)) {
				return trainings;
			}
		}
		
		return null;
	}
	
	@Override
	public boolean setSchedule(ArrayList<DailyScheduleDTO> schedule) {
		ArrayList<Training> trainingsToAdd = new ArrayList<Training>();
		ArrayList<Date> dates = new ArrayList<Date>();
		
		if(CheckHelper.isFilled(schedule)) {
			for (DailyScheduleDTO dto : schedule) {
				dates = getDays(dto.getDay());
				for (Training tr : dto.getTrainings()) {
					for (Date day : dates) {
						tr.setTime(day);
						trainingsToAdd.add(tr);
					}
				}
			}
			
			if(CheckHelper.isFilled(trainingsToAdd)) {
				Iterable<Training> result = repo.save(trainingsToAdd);
				if(CheckHelper.isFilled(result)) {
					return true;
				}
			}
		}
		
		return false; 
	}

	private ArrayList<Date> getDays(int day) {
		ArrayList<Date> dates = new ArrayList<Date>();
		int transformedDay = day == 1 ? 7 : day - 1;
		int yodaDay = getDayConstantForYoda(transformedDay);
		Calendar c = Calendar.getInstance();
		int currentYear = c.get(Calendar.YEAR);
		
		c.set(currentYear, 8, 1);		
		Date start = c.getTime();
		
		c.set(currentYear + 1, 5, 30);		
		Date end = c.getTime();
		
		DateTime dtStart = new DateTime(start.getTime());
		DateTime dtEnd = new DateTime(end.getTime());
				
		while(dtStart.isBefore(dtEnd)) {
			if(dtStart.getDayOfWeek() == yodaDay) {
				dates.add(new Date(dtStart.getMillis()));
				dtStart = dtStart.plusWeeks(1);
			} else {
				dtStart = dtStart.plusDays(1);	
			}
		}
		
		return dates;
	}
	
	private int getDayConstantForYoda(int day) {
		switch (day) {
			case 1: return DateTimeConstants.MONDAY;
			case 2: return DateTimeConstants.TUESDAY;
			case 3: return DateTimeConstants.WEDNESDAY;
			case 4: return DateTimeConstants.THURSDAY;
			case 5: return DateTimeConstants.FRIDAY;
			case 6: return DateTimeConstants.SATURDAY;
			default: return DateTimeConstants.SUNDAY;
		}
	}
}
