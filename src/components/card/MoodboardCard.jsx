import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CollectionsIcon from '@mui/icons-material/Collections';
import { CustomCard } from './CustomCard';
import { ImageTransition } from '../media/ImageTransition';

/**
 * MoodboardCard 컴포넌트
 *
 * 무드보드 컬렉션을 표시하는 카드. CustomCard를 확장하여 구현.
 * ImageTransition을 사용하여 컬렉션 미리보기를 제공하고,
 * 무드보드의 메타데이터(이름, 설명, 아이템 수, 생성일)를 표시.
 *
 * 동작 방식:
 * 1. 기본 상태: 첫 번째 이미지 표시
 * 2. Hover 시: 0.5초 간격으로 다음 이미지로 fade 트랜지션 (250ms)
 * 3. Hover 중: 모든 이미지를 순환하며 자동 재생
 * 4. Hover 해제: 첫 번째 이미지로 복귀
 * 5. 이미지가 0개일 경우: placeholder 아이콘 표시
 * 6. Hover 시 추가 효과: 카드가 살짝 위로 이동하고 액션 버튼 표시
 *
 * Props:
 * @param {string} id - 무드보드 ID [Required]
 * @param {string} name - 무드보드 이름 [Required]
 * @param {string} description - 무드보드 설명 [Optional]
 * @param {Array} items - 무드보드 내 아이템 배열 [Required]
 * @param {string} createdAt - 생성 날짜 (YYYY-MM-DD) [Optional]
 * @param {function} onClick - 카드 클릭 핸들러 [Optional]
 * @param {function} onEdit - 편집 버튼 핸들러 [Optional]
 * @param {function} onDelete - 삭제 버튼 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <MoodboardCard
 *   id="board-1"
 *   name="Abstract Art"
 *   description="Abstract and geometric artwork collection"
 *   items={moodboard.items}
 *   createdAt="2024-10-15"
 *   onClick={() => navigate(`/moodboards/${id}`)}
 *   onEdit={() => handleEdit(id)}
 * />
 */
export function MoodboardCard({
  id,
  name,
  description,
  items = [],
  createdAt,
  onClick,
  onEdit,
  onDelete,
  sx,
  ...props
}) {
  // 썸네일에 표시할 이미지 (최대 4개)
  const thumbnailImages = items.slice(0, 4);
  const itemCount = items.length;

  // Hover 인터랙션 상태
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /**
   * Hover 시 이미지 자동 순환 로직
   * - hover 상태에서 0.5초 간격으로 다음 이미지로 전환
   * - items.length만큼 순환 (modulo 연산)
   * - hover 해제 시 첫 번째 이미지로 리셋
   * - duration(250ms) + 여유시간(250ms) = 500ms interval
   */
  useEffect(() => {
    if (isHovered && items.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % items.length);
      }, 500);

      return () => clearInterval(interval);
    } else {
      // hover 해제 시 첫 번째 이미지로 리셋
      setCurrentImageIndex(0);
    }
  }, [isHovered, items.length]);

  /**
   * 날짜 포맷팅 (YYYY-MM-DD → MMM DD, YYYY)
   */
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  /**
   * 썸네일 미디어 슬롯
   * - hover 시 ImageTransition으로 이미지 자동 순환
   * - 이미지가 없으면 placeholder 아이콘 표시
   */
  const ThumbnailMedia = items.length > 0 ? (
    <ImageTransition
      images={items.map((item) => ({
        src: item.thumbnail || item.src?.medium || item.src,
        alt: item.title || 'Moodboard item',
      }))}
      activeIndex={currentImageIndex}
      transition="fade"
      duration={250}
      aspectRatio="1/1"
      objectFit="cover"
      sx={{
        width: '100%',
        height: '100%',
      }}
    />
  ) : (
    // 이미지가 없는 경우: placeholder
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey.100',
        color: 'grey.400',
        aspectRatio: '1/1',
      }}
    >
      <CollectionsIcon sx={{ fontSize: 48, mb: 1 }} />
      <Typography variant="caption" color="inherit">
        No images yet
      </Typography>
    </Box>
  );

  /**
   * 오버레이 슬롯 (액션 버튼 + 아이템 수 배지)
   * - 액션 버튼: Hover 시에만 표시
   * - 아이템 수 배지: 항상 표시
   */
  const OverlayContent = (
    <>
      {/* 액션 버튼 (Hover 시 표시) */}
      <Box
        className="moodboard-actions"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          gap: 0.5,
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        {onEdit && (
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(id);
            }}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: 'white' },
            }}
          >
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
        )}
        {onDelete && (
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'error.light',
                color: 'white',
              },
            }}
          >
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      {/* 아이템 수 배지 */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          bgcolor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            fontWeight: 600,
            fontSize: '0.7rem',
          }}
        >
          {itemCount} {itemCount === 1 ? 'item' : 'items'}
        </Typography>
      </Box>
    </>
  );

  return (
    <CustomCard
      layout="vertical"
      mediaSlot={ThumbnailMedia}
      mediaRatio="1/1"
      contentPadding="md"
      overlaySlot={OverlayContent}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        // CustomCard 기본 border 제거 (기존 스타일 유지)
        border: 'none',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px -8px rgba(0,0,0,0.15)',
          '& .moodboard-actions': {
            opacity: 1,
          },
        },
        ...sx,
      }}
      {...props}
    >
      {/* 타이틀 */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          lineHeight: 1.3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          mb: description ? 0.5 : 0,
        }}
      >
        {name}
      </Typography>

      {/* 설명 */}
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.4,
            mb: 1.5,
          }}
        >
          {description}
        </Typography>
      )}

      {/* 메타데이터 */}
      {createdAt && (
        <Typography
          variant="caption"
          sx={{
            color: 'text.disabled',
            fontSize: '0.75rem',
          }}
        >
          Created {formatDate(createdAt)}
        </Typography>
      )}
    </CustomCard>
  );
}

export default MoodboardCard;
