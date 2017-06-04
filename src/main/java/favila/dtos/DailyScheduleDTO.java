package favila.dtos;

import java.util.ArrayList;

import favila.model.Training;

public class DailyScheduleDTO {

	public static final int SUNDAY = 1;
	public static final int MONDAY = 2;
	public static final int TUESDAY = 3;
	public static final int WEDNESDAY = 4;
	public static final int THURSDAY = 5;
	public static final int FRIDAY = 6;
	public static final int SATURDAY = 7;
	
	private int day;
	private ArrayList<Training> trainings;
	
	public DailyScheduleDTO() {}
	
	public DailyScheduleDTO(int day, ArrayList<Training> trainings) {
		super();
		this.day = day;
		this.trainings = trainings;
	}

	public int getDay() {
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public ArrayList<Training> getTrainings() {
		return trainings;
	}

	public void setTrainings(ArrayList<Training> trainings) {
		this.trainings = trainings;
	}
}
