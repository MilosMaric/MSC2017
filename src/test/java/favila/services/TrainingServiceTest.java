package favila.services;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import favila.model.Group;
import favila.model.Training;
import favila.repos.ITrainingRepository;

public class TrainingServiceTest {

	@InjectMocks
	private TrainingServiceImpl service;
	
	@Mock
	private ITrainingRepository repo;
	
	@Before
	public void initMocks() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void IsValid_IfTrainingIsNull_ReturnsFalse() {
		assertFalse(service.isValid(null));
	}
	
	@Test
	public void IsValid_IfTrainingIsInvalid_ReturnsFalse() {
		assertFalse(service.isValid(new Training(2, new Date(), "desc", null, "someType")));
	}
	
	@Test
	public void IsValid_IfTrainingIsValid_ReturnsTrue() {
		assertTrue(service.isValid(new Training(2, new Date(), "desc", new Group(), TrainingServiceImpl.individualTraining)));
	}
	
	@Test
	public void GetTrainingsForGroup_IfIdIsInvalid_ReturnsNull() {
		assertNull(service.getTrainingsForGroup(-1));
	}
	
	@Test
	public void GetTrainingsForGroup_IfIdIsValidAndRepoReturnsNull_ReturnsNull() {
		Mockito.when(service.getTrainingsForGroup(Matchers.anyInt())).thenReturn(null);
		assertNull(service.getTrainingsForGroup(3));
	}
	
	@Test
	public void GetTrainingsForGroup_IfIdIsValidAndRepoReturnsNull_ReturnsNull() {
		Mockito.when(service.getTrainingsForGroup(Matchers.anyInt())).thenReturn(null);
		assertNull(service.getTrainingsForGroup(3));
	}
}
