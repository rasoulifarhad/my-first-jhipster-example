package com.farhad.example.myjhipsterplanet.repository;

import com.farhad.example.myjhipsterplanet.domain.Location;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Location entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {}
