import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { CustomCard } from '../../components/card/CustomCard';
import { userData } from '../orbit/data/mock';

/**
 * ConfigFormSection
 * 사용자 설정 및 프로필 관리 폼 템플릿
 * 
 * 레이아웃 컨테이너(SectionContainer, PageContainer)는 페이지 레벨에서 제공됩니다.
 * 이 컴포넌트는 순수 콘텐츠만 렌더링합니다.
 * 
 * @param {Object} data - User 데이터 (기본값: mock userData)
 */
export const ConfigFormSection = ({ data = userData }) => {
  // Local state for form handling simulation
  const [formValues, setFormValues] = useState({
    name: data.profile.name,
    email: data.profile.email,
    bio: data.profile.bio,
    notifications: { ...data.settings.notifications },
    theme: data.settings.theme,
  });

  const handleChange = (field) => (event) => {
    setFormValues({
      ...formValues,
      [field]: event.target.value,
    });
  };

  const handleSwitchChange = (field) => (event) => {
    setFormValues({
      ...formValues,
      notifications: {
        ...formValues.notifications,
        [field]: event.target.checked,
      },
    });
  };

  const handleSave = () => {
    console.log('Saved settings:', formValues);
    alert('Settings saved! (Check console)');
  };

  return (
    <>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Studio Configuration
      </Typography>

      <Stack spacing={3}>
          {/* 1. Profile Section */}
          <CustomCard layout="vertical" contentPadding="lg">
            <Typography variant="h6" gutterBottom>Profile Settings</Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack alignItems="center" spacing={2}>
                  <Avatar 
                    src={data.profile.avatar} 
                    sx={{ width: 100, height: 100, border: '4px solid', borderColor: 'grey.100' }} 
                  />
                  <Button variant="outlined" size="small">Change Avatar</Button>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack spacing={2}>
                  <TextField
                    label="Display Name"
                    fullWidth
                    value={formValues.name}
                    onChange={handleChange('name')}
                  />
                  <TextField
                    label="Email Address"
                    fullWidth
                    value={formValues.email}
                    onChange={handleChange('email')}
                  />
                  <TextField
                    label="Bio"
                    fullWidth
                    multiline
                    rows={3}
                    value={formValues.bio}
                    onChange={handleChange('bio')}
                  />
                </Stack>
              </Grid>
            </Grid>
          </CustomCard>

          {/* 2. Notification Section */}
          <CustomCard layout="vertical" contentPadding="lg">
            <Typography variant="h6" gutterBottom>Notifications</Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Stack spacing={1}>
              <FormControlLabel
                control={
                  <Switch 
                    checked={formValues.notifications.email_digest} 
                    onChange={handleSwitchChange('email_digest')} 
                  />
                }
                label="Weekly Email Digest"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={formValues.notifications.project_updates} 
                    onChange={handleSwitchChange('project_updates')} 
                  />
                }
                label="Project Updates"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={formValues.notifications.mentions} 
                    onChange={handleSwitchChange('mentions')} 
                  />
                }
                label="Mentions & Comments"
              />
            </Stack>
          </CustomCard>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="text" color="inherit">Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save Changes</Button>
        </Box>
      </Stack>
    </>
  );
};
