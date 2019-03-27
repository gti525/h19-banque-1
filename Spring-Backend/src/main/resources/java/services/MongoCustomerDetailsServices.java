package services;

import com.grokonez.spring.restapi.mongodb.model.*;
import com.grokonez.spring.restapi.mongodb.repo.*;
import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;


@Component
public class MongoUserDetailsService implements UserDetailsService{
  @Autowired
  private CustomersRepository repository;

  @Override
  public CustomersDetails loadCustomersByUsername(String username) throws CustomersnameNotFoundException {
    Customers customers = repository.findByName(name);

    if(customer == null) {
      throw new customerNameNotFoundException("Customer does not exist");
    }

    List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("customers"));

    return new Customer(customer.getEmail(), customer.getPassword(), authorities);
  }
}