import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Validate user - Here, implement logic to validate user credentials
  async validateUser(username: string, password: string): Promise<any> {
    // Replace with your actual user validation logic
    const user = { id: 1, username: 'testuser', password: 'testpassword' };
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // Generate JWT token after successful validation
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
