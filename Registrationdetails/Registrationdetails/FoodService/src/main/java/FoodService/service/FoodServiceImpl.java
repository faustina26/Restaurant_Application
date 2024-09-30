package FoodService.service;

import FoodService.Exception.RestaurantAlreadyExists;
import FoodService.Exception.RestaurantNotFound;
import FoodService.Repository.FoodRepository;
import FoodService.domain.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServiceImpl implements FoodService{
    private FoodRepository foodRepository;

    @Autowired
    public FoodServiceImpl(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    @Override
    public Restaurant registerRest(Restaurant restaurant) throws RestaurantAlreadyExists {
        return foodRepository.save(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurants() throws RestaurantNotFound {
        return foodRepository.findAll();
    }

    @Override
    public Restaurant getRestaurantForId(int restaurantId) throws RestaurantNotFound {
        return foodRepository.findById(restaurantId).get();
    }
    @Override
    public   List<Restaurant> getRestaurantByName(String restaurantName) throws RestaurantNotFound{

        return foodRepository.findByRestaurantName(restaurantName);}

}
