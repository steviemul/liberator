package io.steviemul.libraries.service;

import io.steviemul.libraries.LibraryException;
import io.steviemul.libraries.data.entity.Library;
import io.steviemul.libraries.data.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class LibraryService {

  @Autowired
  private LibraryRepository libraryRepository;

  public Iterable<Library> getLibraries() {
    return libraryRepository.findAll();
  }

  public Library getLibrary(long id) {
    return libraryRepository.findById(id).get();
  }

  public Library addLibrary(Library library) {
    return libraryRepository.save(library);
  }

  public Library updateLibrary(Library library) throws LibraryException {

    assertExists(library);

    return libraryRepository.save(library);
  }

  public void deleteLibrary(long libId) throws LibraryException {

    Optional<Library> library = libraryRepository.findById(libId);

    assertExists(library.get());

    libraryRepository.delete(library.get());
  }

  private void assertExists(Library library) throws LibraryException {
    Optional<Library> lib = libraryRepository.findById(library.getLibId());

    if (!lib.isPresent()) {
      throw new LibraryException("Does not exist", HttpStatus.NOT_FOUND.value());
    }
  }
}
