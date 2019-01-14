import { INamedContestCategory, INamedDiscipline } from 'shared/types/shared';

export interface IContestListItem {
  readonly id: string;
  readonly name: string;
  readonly prize: string;
  readonly contestCategory: INamedContestCategory;
  readonly date: string;
  readonly discipline: INamedDiscipline;
  readonly smallProfileUrl: string;
}

export class ContestListResponse {
  public readonly items: IContestListItem[];
  public readonly next: any;

  constructor(items: IContestListItem[], next: any) {
    this.items = items;
    this.next = next;
  }
}
