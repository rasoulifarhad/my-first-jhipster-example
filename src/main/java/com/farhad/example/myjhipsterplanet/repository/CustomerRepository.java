package com.farhad.example.myjhipsterplanet.repository;

import com.farhad.example.myjhipsterplanet.domain.Customer;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Customer entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {}
