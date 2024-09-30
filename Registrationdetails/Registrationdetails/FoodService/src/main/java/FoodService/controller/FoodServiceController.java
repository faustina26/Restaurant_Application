package FoodService.controller;

import FoodService.Exception.RestaurantAlreadyExists;
import FoodService.Exception.RestaurantNotFound;
import FoodService.domain.Restaurant;
import FoodService.service.FoodServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v4")
public class FoodServiceController {
    private FoodServiceImpl foodService;

    @Autowired
    public FoodServiceController(FoodServiceImpl foodService) {
        this.foodService = foodService;
    }
    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Restaurant restaurant){
        try{
            Restaurant restaurant1=foodService.registerRest(restaurant);
            return new ResponseEntity<>("User with Id"+ restaurant1.getRestaurantId()+"created successfully", HttpStatus.CREATED);
        }
        catch (RestaurantAlreadyExists e){
            return new ResponseEntity<>("User already exists",HttpStatus.CONFLICT);
        }
    }
    @GetMapping("/getAll")
    public ResponseEntity<?> getAll(){
        try{
            List<Restaurant> restaurant1=foodService.getAllRestaurants();
          return new ResponseEntity<>(restaurant1,HttpStatus.OK);

        }
        catch (RestaurantNotFound e) {
            return new ResponseEntity<>("Restaurant Not Found",HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/get/{restaurantId}")
    ResponseEntity<?> getRestaurantForParticularId(@PathVariable int restaurantId) throws RestaurantNotFound{
        try{
            Restaurant returnedRestaurantDataForId= foodService.getRestaurantForId(restaurantId);
            return new ResponseEntity<>(returnedRestaurantDataForId,HttpStatus.OK);
        }
        catch (RestaurantNotFound exception){
            throw new RestaurantNotFound();
        }
        catch (Exception e){
            return  new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/get/one/{restaurantName}")
    ResponseEntity<?> getRestaurantName(@PathVariable String restaurantName) throws RestaurantNotFound{
        try {

            List  <Restaurant> getrestaurantDetails =foodService.getRestaurantByName(restaurantName);
            return  new ResponseEntity<>(getrestaurantDetails,HttpStatus.OK);
        }
        catch (RestaurantNotFound exception){
            throw new RestaurantNotFound();
        }
        catch (Exception e){
            return  new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
     }
}

}
