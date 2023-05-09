package com.farhad.example.myjhipsterplanet.repository;

import com.farhad.example.myjhipsterplanet.domain.Company;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Company entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {}
