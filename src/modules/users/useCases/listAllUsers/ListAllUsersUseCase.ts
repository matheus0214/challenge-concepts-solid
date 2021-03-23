import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const checkUserExist = this.usersRepository.findById(user_id);
    if (!checkUserExist) throw Error("User does not found");

    if (!checkUserExist.admin)
      throw Error("You not enable to see this resource");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
