package com.farhad.example.myjhipsterplanet.repository;

import com.farhad.example.myjhipsterplanet.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
