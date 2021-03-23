import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const checkUserExist = this.usersRepository.findById(user_id);
    if (!checkUserExist) throw Error("User does not found");

    return checkUserExist;
  }
}

export { ShowUserProfileUseCase };
