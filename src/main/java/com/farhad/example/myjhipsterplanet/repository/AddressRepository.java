package com.farhad.example.myjhipsterplanet.repository;

import com.farhad.example.myjhipsterplanet.domain.Address;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Address entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {}
