package favila;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import favila.services.GenericServiceTest;
import favila.services.GroupServiceTest;
import favila.services.TrainingServiceTest;
import favila.services.UserServiceTest;
import favila.utils.CheckHelperTest;
import favila.utils.GenericResponseTest;
import favila.utils.JWTUtilsTest;

@RunWith(Suite.class)
@SuiteClasses({
	CheckHelperTest.class,
	JWTUtilsTest.class,
	GenericResponseTest.class,
	UserServiceTest.class,
	GenericServiceTest.class,
	TrainingServiceTest.class,
	GroupServiceTest.class
})
public class FaVilaApplicationTests {

}
