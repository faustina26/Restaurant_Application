package FoodService.Repository;

import FoodService.domain.Restaurant;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepository extends MongoRepository<Restaurant,Integer> {
    List<Restaurant> findByRestaurantName(String restuarantName);
}

