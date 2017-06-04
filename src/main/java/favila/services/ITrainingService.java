package favila.services;

import java.util.ArrayList;
import java.util.Date;

import favila.dtos.DailyScheduleDTO;
import favila.model.Training;

public interface ITrainingService extends IGenericService<Training>{
	ArrayList<Training> getTrainingsForGroup(int grpId);	
	ArrayList<DailyScheduleDTO> getSchedule();
	ArrayList<Training> getTrainingsForPeriod(Date to);
	ArrayList<Training> getTrainingsForPeriod(Date from, Date to);
	ArrayList<Training> getTrainingsForPeriodAndGroup(Date to, int grpId);
	ArrayList<Training> getTrainingsForPeriodAndGroup(Date from, Date to, int grpId);
	boolean addNote(int trainingId, String note);
	boolean cancelTraining(int trainingId);
	boolean setSchedule(ArrayList<DailyScheduleDTO> schedule);
}
