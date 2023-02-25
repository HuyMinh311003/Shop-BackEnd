import { Book } from './../../models/book.model';
import { ItemService } from './../../services/item/item.service';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

@Controller('item')
export class ItemController {
    constructor(private itemService: ItemService) { }

    @Get('all')
    getAllBook() {
        return this.itemService.getAllBook();
    }

    @Get('')
    async getBookById(@Query('id') id: string) {
        return this.itemService.getBookById(id)
    }

    @Post('create')
    async createBook(@Body() book: Book) {
        return this.itemService.createBook(book);
    }

    @Put('')
    async updateUser(@Body() book: Book) {
        return this.itemService.updateBook(book);
    }

    @Delete('')
    async deleteUserById(@Query('id') id: string) {
        return this.itemService.deleteBookById(id)
    }
}
