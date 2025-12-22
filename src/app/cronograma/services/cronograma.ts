import { Injectable } from '@angular/core';
import { StudyBlock } from '../models/study-block.model';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {

  private KEY = 'intelectus_cronograma';

  getBlocks(): StudyBlock[] {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]');
  }

  saveBlocks(blocks: StudyBlock[]) {
    localStorage.setItem(this.KEY, JSON.stringify(blocks));
  }

  addBlock(block: StudyBlock) {
    const blocks = this.getBlocks();
    blocks.push(block);
    this.saveBlocks(blocks);
  }

  updateBlock(block: StudyBlock) {
    const blocks = this.getBlocks().map(b =>
      b.id === block.id ? block : b
    );
    this.saveBlocks(blocks);
  }

  deleteBlock(id: number) {
    const blocks = this.getBlocks().filter(b => b.id !== id);
    this.saveBlocks(blocks);
  }
}
