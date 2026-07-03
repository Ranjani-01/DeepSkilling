package com.Library.service;

import com.Library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showService() {

        System.out.println("Book Service Running");

        bookRepository.displayBook();
    }

}