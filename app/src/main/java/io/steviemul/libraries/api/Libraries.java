package io.steviemul.libraries.api;

import io.steviemul.libraries.data.entity.Library;
import io.steviemul.libraries.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class Libraries {

  @Autowired
  private LibraryService libraryService;

  @GetMapping("/libraries")
  public Iterable<Library> getLibraries() {
    return libraryService.getLibraries();
  }

  @GetMapping("/libraries/{id}")
  public Library getLibrary(@PathVariable("id") long libraryId) {
    return libraryService.getLibrary(libraryId);
  }

  @PutMapping("/libraries/{id}")
  public Library updateLibrary(@RequestBody Library library) throws ResponseStatusException {
    return libraryService.updateLibrary(library);
  }

  @PostMapping("/libraries")
  public Library addLibrary(@RequestBody Library library) {
    return libraryService.addLibrary(library);
  }

  @DeleteMapping("/libraries/{id}")
  public ResponseEntity<Void> deleteLibrary(@PathVariable("id") long libraryId) throws ResponseStatusException {

    libraryService.deleteLibrary(libraryId);

    return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
  }

  public LibraryService getLibraryService() {
    return libraryService;
  }

  public void setLibraryService(LibraryService libraryService) {
    this.libraryService = libraryService;
  }
}
