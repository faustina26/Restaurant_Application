package FoodService.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT,reason = "Restaurant Already Exists")
public class RestaurantAlreadyExists extends Exception{
}
