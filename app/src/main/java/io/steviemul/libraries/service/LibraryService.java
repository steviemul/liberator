package io.steviemul.libraries.service;

import io.steviemul.libraries.data.entity.Library;
import io.steviemul.libraries.data.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Component
public class LibraryService {

  @Autowired
  private LibraryRepository libraryRepository;

  public Iterable<Library> getLibraries() {
    return libraryRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
  }

  public Library getLibrary(long id) {
    return libraryRepository.findById(id).get();
  }

  public Library addLibrary(Library library) {
    return libraryRepository.save(library);
  }

  public Library updateLibrary(Library library) throws ResponseStatusException {

    assertExists(library.getLibId());

    return libraryRepository.save(library);
  }

  public void deleteLibrary(long libId) throws ResponseStatusException {

    Optional<Library> library = libraryRepository.findById(libId);

    assertExists(libId);

    libraryRepository.delete(library.get());
  }

  private void assertExists(long libId) throws ResponseStatusException {
    Optional<Library> lib = libraryRepository.findById(libId);

    if (!lib.isPresent()) {
      throw new ResponseStatusException(
          HttpStatus.NOT_FOUND, "library not found"
      );
    }
  }
}
